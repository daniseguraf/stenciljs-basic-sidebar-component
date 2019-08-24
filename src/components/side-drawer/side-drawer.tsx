import { Component, Prop, State, h, Method } from '@stencil/core'

@Component({
  tag: 'ce-side-drawer',
  styleUrl: 'side-drawer.css',
  shadow: true
})

export class SideDrawer {
  @State() showContactInfo = false;
  @Prop({ reflectToAttr: true }) titleMenu: string;
  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;

  onCloseDrawer = () => {
    this.opened = false;
  }

  onContentChange = (value: string) => {
    this.showContactInfo = value === 'contact'
  }

  @Method()
  async open() {
    this.opened = true;
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
      <div class="backdrop" onClick={this.onCloseDrawer} />,
      <aside>
        <header>
          <h1>{this.titleMenu}</h1>
          <button onClick={this.onCloseDrawer} >X</button>
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
