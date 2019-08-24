/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CeSideDrawer {
    'open': () => Promise<void>;
    'opened': boolean;
    'titleMenu': string;
  }
}

declare global {


  interface HTMLCeSideDrawerElement extends Components.CeSideDrawer, HTMLStencilElement {}
  var HTMLCeSideDrawerElement: {
    prototype: HTMLCeSideDrawerElement;
    new (): HTMLCeSideDrawerElement;
  };
  interface HTMLElementTagNameMap {
    'ce-side-drawer': HTMLCeSideDrawerElement;
  }
}

declare namespace LocalJSX {
  interface CeSideDrawer extends JSXBase.HTMLAttributes<HTMLCeSideDrawerElement> {
    'opened'?: boolean;
    'titleMenu'?: string;
  }

  interface IntrinsicElements {
    'ce-side-drawer': CeSideDrawer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


