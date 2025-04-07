
/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      autoplay?: boolean;
      loop?: boolean;
      controls?: boolean;
      speed?: number;
      background?: string;
      intermission?: number;
    };
  }
}
