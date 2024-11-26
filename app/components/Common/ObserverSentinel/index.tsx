import { DependencyList, ReactElement, useEffect, useRef } from "react";

export type ObserverSentinelProps = {
  component: ReactElement;
  onIntersectDeps: () => DependencyList;
  onIntersect: () => void;
};

export default function ObserverSentinel({
  component,
  onIntersectDeps,
  onIntersect,
}: ObserverSentinelProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        onIntersect();
      }
    };
    observerRef.current = new IntersectionObserver(observerCallback);
    const loaderElement = document.querySelector(
      ".sentinel_component"
    ) as HTMLElement;
    if (loaderElement) {
      observerRef.current.observe(loaderElement);
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, onIntersectDeps());
  return <div className="sentinel_component">{component}</div>;
}
