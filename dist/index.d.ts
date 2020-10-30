declare global {
    interface Window {
        MarkdownToolbarElement: typeof MarkdownToolbarElement;
        MarkdownHeaderButtonElement: typeof MarkdownHeaderButtonElement;
        MarkdownBoldButtonElement: typeof MarkdownBoldButtonElement;
        MarkdownItalicButtonElement: typeof MarkdownItalicButtonElement;
        MarkdownStrikeButtonElement: typeof MarkdownStrikeButtonElement;
        MarkdownQuoteButtonElement: typeof MarkdownQuoteButtonElement;
        MarkdownCodeButtonElement: typeof MarkdownCodeButtonElement;
        MarkdownLinkButtonElement: typeof MarkdownLinkButtonElement;
        MarkdownImageButtonElement: typeof MarkdownImageButtonElement;
        MarkdownUnorderedListButtonElement: typeof MarkdownUnorderedListButtonElement;
        MarkdownOrderedListButtonElement: typeof MarkdownOrderedListButtonElement;
        MarkdownTaskListButtonElement: typeof MarkdownTaskListButtonElement;
        MarkdownMentionButtonElement: typeof MarkdownMentionButtonElement;
        MarkdownRefButtonElement: typeof MarkdownRefButtonElement;
    }
    interface HTMLElementTagNameMap {
        'markdown-toolbar': MarkdownToolbarElement;
        'md-header': MarkdownHeaderButtonElement;
        'md-bold': MarkdownBoldButtonElement;
        'md-italic': MarkdownItalicButtonElement;
        'md-strike': MarkdownStrikeButtonElement;
        'md-quote': MarkdownQuoteButtonElement;
        'md-code': MarkdownCodeButtonElement;
        'md-link': MarkdownLinkButtonElement;
        'md-image': MarkdownImageButtonElement;
        'md-unordered-list': MarkdownUnorderedListButtonElement;
        'md-ordered-list': MarkdownOrderedListButtonElement;
        'md-task-list': MarkdownTaskListButtonElement;
        'md-mention': MarkdownMentionButtonElement;
        'md-ref': MarkdownRefButtonElement;
    }
}
declare type Style = {
    prefix?: string;
    suffix?: string;
    trimFirst?: boolean;
    multiline?: boolean;
    surroundWithNewlines?: boolean;
    blockPrefix?: string;
    blockSuffix?: string;
    replaceNext?: string;
    scanFor?: string;
    orderedList?: boolean;
    prefixSpace?: boolean;
};
declare class MarkdownButtonElement extends HTMLElement {
    constructor();
    connectedCallback(): void;
    click(): void;
    getStyle(): Style | undefined;
}
declare class MarkdownHeaderButtonElement extends MarkdownButtonElement {
    constructor();
    setStyle(): void;
    getStyle(): Style | undefined;
}
declare class MarkdownBoldButtonElement extends MarkdownButtonElement {
    constructor();
    connectedCallback(): void;
}
declare class MarkdownItalicButtonElement extends MarkdownButtonElement {
    constructor();
    connectedCallback(): void;
}
declare class MarkdownStrikeButtonElement extends MarkdownButtonElement {
    constructor();
    connectedCallback(): void;
}
declare class MarkdownQuoteButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownCodeButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownLinkButtonElement extends MarkdownButtonElement {
    constructor();
    connectedCallback(): void;
}
declare class MarkdownImageButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownTaskListButtonElement extends MarkdownButtonElement {
    constructor();
    connectedCallback(): void;
}
declare class MarkdownMentionButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownRefButtonElement extends MarkdownButtonElement {
    constructor();
}
declare class MarkdownToolbarElement extends HTMLElement {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    get field(): HTMLTextAreaElement | null;
}
export default MarkdownToolbarElement;
