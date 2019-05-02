/* tslint:disable */
/* auto-generated angular directive proxies */
import { Component, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Components } from '@ionic/core';
import { proxyInputs, proxyMethods, proxyOutputs } from './proxies-utils';


export declare interface IonApp extends Components.IonApp {}
@Component({ selector: 'ion-app', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonAvatar extends Components.IonAvatar {}
@Component({ selector: 'ion-avatar', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonBackButton extends Components.IonBackButton {}
@Component({ selector: 'ion-back-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'defaultHref', 'icon', 'mode', 'text'] })
export class IonBackButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonBackButton, ['color', 'defaultHref', 'icon', 'mode', 'text']);

export declare interface IonBackdrop extends Components.IonBackdrop {}
@Component({ selector: 'ion-backdrop', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['stopPropagation', 'tappable', 'visible'] })
export class IonBackdrop {
  ionBackdropTap!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionBackdropTap']);
  }
}
proxyInputs(IonBackdrop, ['stopPropagation', 'tappable', 'visible']);

export declare interface IonBadge extends Components.IonBadge {}
@Component({ selector: 'ion-badge', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonBadge, ['color', 'mode']);

export declare interface IonButton extends Components.IonButton {}
@Component({ selector: 'ion-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['buttonType', 'color', 'disabled', 'expand', 'fill', 'href', 'mode', 'routerDirection', 'shape', 'size', 'strong', 'type'] })
export class IonButton {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}
proxyInputs(IonButton, ['buttonType', 'color', 'disabled', 'expand', 'fill', 'href', 'mode', 'routerDirection', 'shape', 'size', 'strong', 'type']);

export declare interface IonButtons extends Components.IonButtons {}
@Component({ selector: 'ion-buttons', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonCard extends Components.IonCard {}
@Component({ selector: 'ion-card', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonCard, ['color', 'mode']);

export declare interface IonCardContent extends Components.IonCardContent {}
@Component({ selector: 'ion-card-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode'] })
export class IonCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonCardContent, ['mode']);

export declare interface IonCardHeader extends Components.IonCardHeader {}
@Component({ selector: 'ion-card-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'translucent'] })
export class IonCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonCardHeader, ['color', 'mode', 'translucent']);

export declare interface IonCardSubtitle extends Components.IonCardSubtitle {}
@Component({ selector: 'ion-card-subtitle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonCardSubtitle, ['color', 'mode']);

export declare interface IonCardTitle extends Components.IonCardTitle {}
@Component({ selector: 'ion-card-title', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonCardTitle, ['color', 'mode']);

export declare interface IonCheckbox extends Components.IonCheckbox {}
@Component({ selector: 'ion-checkbox', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value'] })
export class IonCheckbox {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}
proxyInputs(IonCheckbox, ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']);

export declare interface IonChip extends Components.IonChip {}
@Component({ selector: 'ion-chip', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'outline'] })
export class IonChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonChip, ['color', 'mode', 'outline']);

export declare interface IonCol extends Components.IonCol {}
@Component({ selector: 'ion-col', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs'] })
export class IonCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonCol, ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']);

export declare interface IonContent extends Components.IonContent {}
@Component({ selector: 'ion-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'] })
export class IonContent {
  ionScrollStart!: EventEmitter<CustomEvent>;
  ionScroll!: EventEmitter<CustomEvent>;
  ionScrollEnd!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
  }
}
proxyMethods(IonContent, ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']);
proxyInputs(IonContent, ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']);

export declare interface IonDatetime extends Components.IonDatetime {}
@Component({ selector: 'ion-datetime', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['cancelText', 'dayNames', 'dayShortNames', 'dayValues', 'disabled', 'displayFormat', 'doneText', 'hourValues', 'max', 'min', 'minuteValues', 'mode', 'monthNames', 'monthShortNames', 'monthValues', 'name', 'pickerFormat', 'pickerOptions', 'placeholder', 'readonly', 'value', 'yearValues'] })
export class IonDatetime {
  ionCancel!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
  }
}
proxyMethods(IonDatetime, ['open']);
proxyInputs(IonDatetime, ['cancelText', 'dayNames', 'dayShortNames', 'dayValues', 'disabled', 'displayFormat', 'doneText', 'hourValues', 'max', 'min', 'minuteValues', 'mode', 'monthNames', 'monthShortNames', 'monthValues', 'name', 'pickerFormat', 'pickerOptions', 'placeholder', 'readonly', 'value', 'yearValues']);

export declare interface IonFab extends Components.IonFab {}
@Component({ selector: 'ion-fab', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activated', 'edge', 'horizontal', 'vertical'] })
export class IonFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(IonFab, ['close']);
proxyInputs(IonFab, ['activated', 'edge', 'horizontal', 'vertical']);

export declare interface IonFabButton extends Components.IonFabButton {}
@Component({ selector: 'ion-fab-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activated', 'color', 'disabled', 'href', 'mode', 'routerDirection', 'show', 'size', 'translucent', 'type'] })
export class IonFabButton {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}
proxyInputs(IonFabButton, ['activated', 'color', 'disabled', 'href', 'mode', 'routerDirection', 'show', 'size', 'translucent', 'type']);

export declare interface IonFabList extends Components.IonFabList {}
@Component({ selector: 'ion-fab-list', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activated', 'side'] })
export class IonFabList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonFabList, ['activated', 'side']);

export declare interface IonFooter extends Components.IonFooter {}
@Component({ selector: 'ion-footer', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] })
export class IonFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonFooter, ['mode', 'translucent']);

export declare interface IonGrid extends Components.IonGrid {}
@Component({ selector: 'ion-grid', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['fixed'] })
export class IonGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonGrid, ['fixed']);

export declare interface IonHeader extends Components.IonHeader {}
@Component({ selector: 'ion-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] })
export class IonHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonHeader, ['mode', 'translucent']);

export declare interface IonIcon {}
@Component({ selector: 'ion-icon', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src'] })
export class IonIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonIcon, ['ariaLabel', 'color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src']);

export declare interface IonImg extends Components.IonImg {}
@Component({ selector: 'ion-img', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['alt', 'src'] })
export class IonImg {
  ionImgDidLoad!: EventEmitter<CustomEvent>;
  ionError!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionImgDidLoad', 'ionError']);
  }
}
proxyInputs(IonImg, ['alt', 'src']);

export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {}
@Component({ selector: 'ion-infinite-scroll', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'position', 'threshold'] })
export class IonInfiniteScroll {
  ionInfinite!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInfinite']);
  }
}
proxyMethods(IonInfiniteScroll, ['complete']);
proxyInputs(IonInfiniteScroll, ['disabled', 'position', 'threshold']);

export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {}
@Component({ selector: 'ion-infinite-scroll-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['loadingSpinner', 'loadingText'] })
export class IonInfiniteScrollContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonInfiniteScrollContent, ['loadingSpinner', 'loadingText']);

export declare interface IonInput extends Components.IonInput {}
@Component({ selector: 'ion-input', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'] })
export class IonInput {
  ionInput!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
  }
}
proxyMethods(IonInput, ['setFocus', 'getInputElement']);
proxyInputs(IonInput, ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']);

export declare interface IonItem extends Components.IonItem {}
@Component({ selector: 'ion-item', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['button', 'color', 'detail', 'detailIcon', 'disabled', 'href', 'lines', 'mode', 'routerDirection', 'type'] })
export class IonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonItem, ['button', 'color', 'detail', 'detailIcon', 'disabled', 'href', 'lines', 'mode', 'routerDirection', 'type']);

export declare interface IonItemDivider extends Components.IonItemDivider {}
@Component({ selector: 'ion-item-divider', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'sticky'] })
export class IonItemDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonItemDivider, ['color', 'mode', 'sticky']);

export declare interface IonItemGroup extends Components.IonItemGroup {}
@Component({ selector: 'ion-item-group', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonItemOption extends Components.IonItemOption {}
@Component({ selector: 'ion-item-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'expandable', 'href', 'mode'] })
export class IonItemOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonItemOption, ['color', 'disabled', 'expandable', 'href', 'mode']);

export declare interface IonItemOptions extends Components.IonItemOptions {}
@Component({ selector: 'ion-item-options', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['side'] })
export class IonItemOptions {
  ionSwipe!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSwipe']);
  }
}
proxyInputs(IonItemOptions, ['side']);

export declare interface IonItemSliding extends Components.IonItemSliding {}
@Component({ selector: 'ion-item-sliding', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled'] })
export class IonItemSliding {
  ionDrag!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionDrag']);
  }
}
proxyMethods(IonItemSliding, ['getOpenAmount', 'getSlidingRatio', 'close', 'closeOpened']);
proxyInputs(IonItemSliding, ['disabled']);

export declare interface IonLabel extends Components.IonLabel {}
@Component({ selector: 'ion-label', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'position'] })
export class IonLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonLabel, ['color', 'mode', 'position']);

export declare interface IonList extends Components.IonList {}
@Component({ selector: 'ion-list', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['inset', 'lines', 'mode'] })
export class IonList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(IonList, ['closeSlidingItems']);
proxyInputs(IonList, ['inset', 'lines', 'mode']);

export declare interface IonListHeader extends Components.IonListHeader {}
@Component({ selector: 'ion-list-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonListHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonListHeader, ['color', 'mode']);

export declare interface IonMenu extends Components.IonMenu {}
@Component({ selector: 'ion-menu', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'] })
export class IonMenu {
  ionWillOpen!: EventEmitter<CustomEvent>;
  ionWillClose!: EventEmitter<CustomEvent>;
  ionDidOpen!: EventEmitter<CustomEvent>;
  ionDidClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
  }
}
proxyMethods(IonMenu, ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']);
proxyInputs(IonMenu, ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type']);

export declare interface IonMenuButton extends Components.IonMenuButton {}
@Component({ selector: 'ion-menu-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['autoHide', 'color', 'menu', 'mode'] })
export class IonMenuButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonMenuButton, ['autoHide', 'color', 'menu', 'mode']);

export declare interface IonMenuToggle extends Components.IonMenuToggle {}
@Component({ selector: 'ion-menu-toggle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['autoHide', 'menu'] })
export class IonMenuToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonMenuToggle, ['autoHide', 'menu']);

export declare interface IonNav extends Components.IonNav {}
@Component({ selector: 'ion-nav', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'] })
export class IonNav {
  ionNavWillChange!: EventEmitter<CustomEvent>;
  ionNavDidChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionNavWillChange', 'ionNavDidChange']);
  }
}
proxyMethods(IonNav, ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']);
proxyInputs(IonNav, ['animated', 'animation', 'root', 'rootParams', 'swipeGesture']);

export declare interface IonNavPop extends Components.IonNavPop {}
@Component({ selector: 'ion-nav-pop', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonNavPop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonNavPush extends Components.IonNavPush {}
@Component({ selector: 'ion-nav-push', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] })
export class IonNavPush {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonNavPush, ['component', 'componentProps']);

export declare interface IonNavSetRoot extends Components.IonNavSetRoot {}
@Component({ selector: 'ion-nav-set-root', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] })
export class IonNavSetRoot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonNavSetRoot, ['component', 'componentProps']);

export declare interface IonNote extends Components.IonNote {}
@Component({ selector: 'ion-note', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonNote, ['color', 'mode']);

export declare interface IonProgressBar extends Components.IonProgressBar {}
@Component({ selector: 'ion-progress-bar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value'] })
export class IonProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonProgressBar, ['buffer', 'color', 'mode', 'reversed', 'type', 'value']);

export declare interface IonRadio extends Components.IonRadio {}
@Component({ selector: 'ion-radio', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'mode', 'name', 'value'] })
export class IonRadio {
  ionSelect!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSelect', 'ionFocus', 'ionBlur']);
  }
}
proxyInputs(IonRadio, ['checked', 'color', 'disabled', 'mode', 'name', 'value']);

export declare interface IonRadioGroup extends Components.IonRadioGroup {}
@Component({ selector: 'ion-radio-group', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['allowEmptySelection', 'name', 'value'] })
export class IonRadioGroup {
  ionChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}
proxyInputs(IonRadioGroup, ['allowEmptySelection', 'name', 'value']);

export declare interface IonRange extends Components.IonRange {}
@Component({ selector: 'ion-range', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value'] })
export class IonRange {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}
proxyInputs(IonRange, ['color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'snaps', 'step', 'ticks', 'value']);

export declare interface IonRefresher extends Components.IonRefresher {}
@Component({ selector: 'ion-refresher', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['closeDuration', 'disabled', 'pullMax', 'pullMin', 'snapbackDuration'] })
export class IonRefresher {
  ionRefresh!: EventEmitter<CustomEvent>;
  ionPull!: EventEmitter<CustomEvent>;
  ionStart!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
  }
}
proxyMethods(IonRefresher, ['complete', 'cancel', 'getProgress']);
proxyInputs(IonRefresher, ['closeDuration', 'disabled', 'pullMax', 'pullMin', 'snapbackDuration']);

export declare interface IonRefresherContent extends Components.IonRefresherContent {}
@Component({ selector: 'ion-refresher-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'] })
export class IonRefresherContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonRefresherContent, ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']);

export declare interface IonReorder extends Components.IonReorder {}
@Component({ selector: 'ion-reorder', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonReorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonReorderGroup extends Components.IonReorderGroup {}
@Component({ selector: 'ion-reorder-group', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled'] })
export class IonReorderGroup {
  ionItemReorder!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionItemReorder']);
  }
}
proxyMethods(IonReorderGroup, ['complete']);
proxyInputs(IonReorderGroup, ['disabled']);

export declare interface IonRippleEffect extends Components.IonRippleEffect {}
@Component({ selector: 'ion-ripple-effect', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['type'] })
export class IonRippleEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyMethods(IonRippleEffect, ['addRipple']);
proxyInputs(IonRippleEffect, ['type']);

export declare interface IonRow extends Components.IonRow {}
@Component({ selector: 'ion-row', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonSearchbar extends Components.IonSearchbar {}
@Component({ selector: 'ion-searchbar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value'] })
export class IonSearchbar {
  ionInput!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionCancel!: EventEmitter<CustomEvent>;
  ionClear!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
  }
}
proxyMethods(IonSearchbar, ['setFocus', 'getInputElement']);
proxyInputs(IonSearchbar, ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value']);

export declare interface IonSegment extends Components.IonSegment {}
@Component({ selector: 'ion-segment', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'disabled', 'mode', 'scrollable', 'value'] })
export class IonSegment {
  ionChange!: EventEmitter<CustomEvent>;
  ionStyle!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionStyle']);
  }
}
proxyInputs(IonSegment, ['color', 'disabled', 'mode', 'scrollable', 'value']);

export declare interface IonSegmentButton extends Components.IonSegmentButton {}
@Component({ selector: 'ion-segment-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'layout', 'mode', 'value'] })
export class IonSegmentButton {
  ionSelect!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSelect']);
  }
}
proxyInputs(IonSegmentButton, ['checked', 'disabled', 'layout', 'mode', 'value']);

export declare interface IonSelect extends Components.IonSelect {}
@Component({ selector: 'ion-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'] })
export class IonSelect {
  ionChange!: EventEmitter<CustomEvent>;
  ionCancel!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionFocus', 'ionBlur']);
  }
}
proxyMethods(IonSelect, ['open']);
proxyInputs(IonSelect, ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value']);

export declare interface IonSelectOption extends Components.IonSelectOption {}
@Component({ selector: 'ion-select-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'selected', 'value'] })
export class IonSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonSelectOption, ['disabled', 'selected', 'value']);

export declare interface IonSkeletonText extends Components.IonSkeletonText {}
@Component({ selector: 'ion-skeleton-text', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['animated', 'width'] })
export class IonSkeletonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonSkeletonText, ['animated', 'width']);

export declare interface IonSlide extends Components.IonSlide {}
@Component({ selector: 'ion-slide', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonSlides extends Components.IonSlides {}
@Component({ selector: 'ion-slides', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['options', 'pager', 'scrollbar'] })
export class IonSlides {
  ionSlidesDidLoad!: EventEmitter<CustomEvent>;
  ionSlideTap!: EventEmitter<CustomEvent>;
  ionSlideDoubleTap!: EventEmitter<CustomEvent>;
  ionSlideWillChange!: EventEmitter<CustomEvent>;
  ionSlideDidChange!: EventEmitter<CustomEvent>;
  ionSlideNextStart!: EventEmitter<CustomEvent>;
  ionSlidePrevStart!: EventEmitter<CustomEvent>;
  ionSlideNextEnd!: EventEmitter<CustomEvent>;
  ionSlidePrevEnd!: EventEmitter<CustomEvent>;
  ionSlideTransitionStart!: EventEmitter<CustomEvent>;
  ionSlideTransitionEnd!: EventEmitter<CustomEvent>;
  ionSlideDrag!: EventEmitter<CustomEvent>;
  ionSlideReachStart!: EventEmitter<CustomEvent>;
  ionSlideReachEnd!: EventEmitter<CustomEvent>;
  ionSlideTouchStart!: EventEmitter<CustomEvent>;
  ionSlideTouchEnd!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
  }
}
proxyMethods(IonSlides, ['update', 'updateAutoHeight', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes']);
proxyInputs(IonSlides, ['options', 'pager', 'scrollbar']);

export declare interface IonSpinner extends Components.IonSpinner {}
@Component({ selector: 'ion-spinner', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'duration', 'name', 'paused'] })
export class IonSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonSpinner, ['color', 'duration', 'name', 'paused']);

export declare interface IonSplitPane extends Components.IonSplitPane {}
@Component({ selector: 'ion-split-pane', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'when'] })
export class IonSplitPane {
  ionSplitPaneVisible!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
  }
}
proxyInputs(IonSplitPane, ['contentId', 'disabled', 'when']);

export declare interface IonTabBar extends Components.IonTabBar {}
@Component({ selector: 'ion-tab-bar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'selectedTab', 'translucent'] })
export class IonTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonTabBar, ['color', 'mode', 'selectedTab', 'translucent']);

export declare interface IonTabButton extends Components.IonTabButton {}
@Component({ selector: 'ion-tab-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'href', 'layout', 'mode', 'selected', 'tab'] })
export class IonTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonTabButton, ['disabled', 'href', 'layout', 'mode', 'selected', 'tab']);

export declare interface IonText extends Components.IonText {}
@Component({ selector: 'ion-text', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonText, ['color', 'mode']);

export declare interface IonTextarea extends Components.IonTextarea {}
@Component({ selector: 'ion-textarea', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'] })
export class IonTextarea {
  ionChange!: EventEmitter<CustomEvent>;
  ionInput!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
  }
}
proxyMethods(IonTextarea, ['setFocus', 'getInputElement']);
proxyInputs(IonTextarea, ['autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap']);

export declare interface IonThumbnail extends Components.IonThumbnail {}
@Component({ selector: 'ion-thumbnail', changeDetection: 0, template: '<ng-content></ng-content>' })
export class IonThumbnail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface IonTitle extends Components.IonTitle {}
@Component({ selector: 'ion-title', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color'] })
export class IonTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonTitle, ['color']);

export declare interface IonToggle extends Components.IonToggle {}
@Component({ selector: 'ion-toggle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['checked', 'color', 'disabled', 'mode', 'name', 'value'] })
export class IonToggle {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}
proxyInputs(IonToggle, ['checked', 'color', 'disabled', 'mode', 'name', 'value']);

export declare interface IonToolbar extends Components.IonToolbar {}
@Component({ selector: 'ion-toolbar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] })
export class IonToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(IonToolbar, ['color', 'mode']);
