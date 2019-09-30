import { Component, Listen, Prop, h } from '@stencil/core'

@Component({
  tag: 'ce-hamburger',
  styleUrl: './hamburger.css',
  shadow: true
})
export class Hamburger {
  @Prop({reflectToAttr: true, mutable: true}) isActive: boolean = false;

  @Listen('sidebarIsOpen', {target: 'body'})
  @Listen('sidebarIsClose', {target: 'body'})
  sidebarIsOpenHandler(event: CustomEvent) {
    this.isActive = event.detail;
  }

  render() {
    return (
      <div class="hamburger">
        <div class="bar"></div>
      </div>
    )
  }
}
