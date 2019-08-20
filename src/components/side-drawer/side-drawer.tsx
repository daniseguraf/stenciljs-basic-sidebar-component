import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'uc-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @Prop({ reflectToAttr: true }) title: string;
  @Prop({ reflectToAttr: true, mutable: true }) open: boolean;

  onCloseDrawer = () => {
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer} >X</button>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    )
  }
}
