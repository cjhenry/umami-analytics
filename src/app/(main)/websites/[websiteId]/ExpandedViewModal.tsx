import { Dialog, Modal, useBreakpoint } from '@umami/react-zen';
import { WebsiteExpandedView } from '@/app/(main)/websites/[websiteId]/WebsiteExpandedView';
import { useNavigation } from '@/components/hooks';

export function ExpandedViewModal({
  websiteId,
  excludedIds,
}: {
  websiteId: string;
  excludedIds?: string[];
}) {
  const {
    router,
    query: { view },
    updateParams,
  } = useNavigation();
  const breakpoint = useBreakpoint();
  const isMobile = ['xs', 'sm', 'md'].includes(breakpoint);

  const handleClose = (close: () => void) => {
    router.push(updateParams({ view: undefined }));
    close();
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      router.push(updateParams({ view: undefined }));
    }
  };

  return (
    <Modal isOpen={!!view} onOpenChange={handleOpenChange} isDismissable>
      <Dialog
        style={{
          maxWidth: 1320,
          width: '100vw',
          height: isMobile ? '100dvh' : 'calc(100dvh - 40px)',
        }}
      >
        {({ close }) => {
          return (
            <WebsiteExpandedView
              websiteId={websiteId}
              excludedIds={excludedIds}
              onClose={() => handleClose(close)}
            />
          );
        }}
      </Dialog>
    </Modal>
  );
}
