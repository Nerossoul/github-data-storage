export function getAuthTokens(element, AuthClass) {
    const gitHubAuth = new AuthClass()
    element.addEventListener('click', () => console.log('auth', gitHubAuth))
}
