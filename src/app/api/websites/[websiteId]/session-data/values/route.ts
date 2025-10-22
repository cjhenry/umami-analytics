import { canViewWebsite } from '@/permissions';
import { getQueryFilters, parseRequest } from '@/lib/request';
import { json, unauthorized } from '@/lib/response';
import { getSessionDataValues } from '@/queries/sql';
import { z } from 'zod';
import { filterParams } from '@/lib/schema';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ websiteId: string }> },
) {
  const schema = z.object({
    startAt: z.coerce.number().int(),
    endAt: z.coerce.number().int(),
    propertyName: z.string().optional(),
    ...filterParams,
  });

  const { auth, query, error } = await parseRequest(request, schema);

  if (error) {
    return error();
  }

  const { websiteId } = await params;

  if (!(await canViewWebsite(auth, websiteId))) {
    return unauthorized();
  }

  const { propertyName } = query;
  const filters = await getQueryFilters(query, websiteId);

  const data = await getSessionDataValues(websiteId, {
    ...filters,
    propertyName,
  });

  return json(data);
}
