import {create} from 'zustand';
import classNames from 'classnames';

const useThemeStore = create(set => ({
    isDark: localStorage.getItem('theme') === 'dark',
    toggleTheme: () => {
        set(state => {
            const isDark = !state.isDark;
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            return { isDark };
        });
    },
    themeClass: classNames({
        dark: localStorage.getItem('theme') === 'dark',
        light: localStorage.getItem('theme') === 'light',
    }),
}));

export default useThemeStore;
