export default class SidebarService {
    setTheme(theme) {
        document.documentElement.classList.add(theme);
        localStorage.setItem('color-theme', theme);
    }
    setThemeAndRemove(theme, remove) {
        document.documentElement.classList.remove(remove);
        localStorage.setItem('color-theme', theme);
    }
}