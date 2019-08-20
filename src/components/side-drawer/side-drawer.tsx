import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'uc-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @Prop({ reflectToAttr: true }) title: string;
  @Prop({ reflectToAttr: true }) open: boolean;

  render() {
    return (
      <aside>
        <header><h1>{this.title}</h1></header>
        <main>
          <slot />
        </main>
      </aside>
    )
  }
}
