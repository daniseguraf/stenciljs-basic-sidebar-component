import { Component, h } from '@stencil/core'

@Component({
  tag: 'uc-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true
})

export class SideDrawer {
  render() {
    return (
      <aside>
        The Side Drawer
      </aside>
    )
  }
}
