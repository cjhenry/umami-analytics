import { useBreakpoint } from '@umami/react-zen';

export function useMobile() {
  const breakpoint = useBreakpoint();
  const isMobile = ['xs', 'sm', 'md'].includes(breakpoint);

  return { breakpoint, isMobile };
}
