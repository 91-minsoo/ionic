import { Component, ComponentInterface, Prop, getMode, h } from '@stencil/core';

import { config } from '../../global/ionic-global';
import { Mode, SpinnerTypes } from '../../interface';
import { createThemedClasses } from '../../utils/theme';

@Component({
  tag: 'ion-infinite-scroll-content',
  styleUrls: {
    ios: 'infinite-scroll-content.ios.scss',
    md: 'infinite-scroll-content.md.scss'
  }
})
export class InfiniteScrollContent implements ComponentInterface {

  private mode = getMode<Mode>(this);

  /**
   * An animated SVG spinner that shows while loading.
   */
  @Prop({ mutable: true }) loadingSpinner?: SpinnerTypes | null;

  /**
   * Optional text to display while loading.
   */
  @Prop() loadingText?: string;

  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      this.loadingSpinner = config.get(
        'infiniteLoadingSpinner',
        config.get('spinner', this.mode === 'ios' ? 'lines' : 'crescent')
      );
    }
  }

  hostData() {
    return {
      class: createThemedClasses(this.mode, 'infinite-scroll-content')
    };
  }

  render() {
    return (
      <div class="infinite-loading">
        {this.loadingSpinner && (
          <div class="infinite-loading-spinner">
            <ion-spinner name={this.loadingSpinner} />
          </div>
        )}
        {this.loadingText && (
          <div class="infinite-loading-text" innerHTML={this.loadingText} />
        )}
      </div>
    );
  }
}
