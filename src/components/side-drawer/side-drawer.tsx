import { Component, Prop, State, h, Method, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'ce-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @State() showContactInfo: boolean = false;

  @Prop({ reflectToAttr: true }) titleMenu: string;
  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;

  @Event() sidebarIsClose: EventEmitter;
  @Method()
  async close() {
    this.opened = false;
    this.sidebarIsClose.emit(this.opened)
  }

  onContentChange(content: string) {
    this.showContactInfo = content === 'contact';
  }

  @Event() sidebarIsOpen: EventEmitter;
  @Method()
  async open() {
    this.opened = true;
    this.sidebarIsOpen.emit(this.opened);
  }

  render() {
    let mainContent = <slot />;

    if(this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>Contact us:</p>
          <ul>
            <li>Phone: 453564434</li>
            <li>Email: a@b.com</li>
          </ul>
        </div>
      )
    }

    return [
      <div class="backdrop" onClick={this.close.bind(this)} />,
      <aside>
        <header>
          <h1>{this.titleMenu}</h1>
          <button onClick={this.close.bind(this)} >X</button>
        </header>
        <section id="tabs">
          <button
            class={!this.showContactInfo && 'active'}
            onClick={() => {this.onContentChange('nav')}}
          >
            Navigation
          </button>
          <button
            class={this.showContactInfo && 'active'}
            onClick={() => { this.onContentChange('contact') }}
          >
            Contact
          </button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ]
  }
}
