'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

type CalButtonProps = {
  namespace?: string;
  link?: string;
  config?: Record<string, any>;
  component?: any;
  children?: React.ReactNode;
  [key: string]: any;
};

export default function CalButton({
  namespace = 'free-consultation',
  link = 'oriums/free-consultation',
  config = { layout: 'month_view', theme: 'dark' },
  component: Component = Button,
  children,
  ...rest
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace });
        if (cal) cal('ui', { ...config });
      } catch (e) {
        // keep silent; if cal isn't available we'll still render the button with data attributes
        console.warn('Cal API initialization failed', e);
      }
    })();
  }, [namespace, JSON.stringify(config)]);

  return (
    // NOTE: `Component` can be a motion.button or your UI `Button` component
    // It will receive the data-cal attributes so Cal.com recognizes it
    <Component
      data-cal-namespace={namespace}
      data-cal-link={link}
      data-cal-config={JSON.stringify(config)}
      {...rest}
    >
      {children}
    </Component>
  );
}
