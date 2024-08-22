export interface NavigationType {
    key: string;
    label: string;
    url: string;
}

const navigation: NavigationType[] = [
    { key: 'home', label: 'Home', url: '/' },
    { key: 'ListaCrimes', label: 'ListaCrimes', url: '/ListaCrimes' },
    { key: 'Login', label: 'Criar Login', url: '/Login' },
];

export default navigation;
