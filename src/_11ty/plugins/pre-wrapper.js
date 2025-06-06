module.exports = md => {
	const defaultFenceRenderer = md.renderer.rules.fence;
	md.renderer.rules.fence = (...args) => `
<div class="code-wrapper">
    ${defaultFenceRenderer(...args)}
    <button class="copy-btn" aria-labelledby="copy-button-label">
        <span hidden id="copy-button-label">Copy code to clipboard</span>
        <svg width="20" height="20" viewBox="0 0 20 20" role="img" aria-label="copy" fill="none" focusable="false">
            <path d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33332C1.66667 2.8913 1.84226 2.46737 2.15482 2.15481C2.46738 1.84225 2.89131 1.66666 3.33333 1.66666H10.8333C11.2754 1.66666 11.6993 1.84225 12.0118 2.15481C12.3244 2.46737 12.5 2.8913 12.5 3.33332V4.16666M9.16667 7.49999H16.6667C17.5871 7.49999 18.3333 8.24618 18.3333 9.16666V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16666C7.5 8.24618 8.24619 7.49999 9.16667 7.49999Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </button>
</div>
`;
};
