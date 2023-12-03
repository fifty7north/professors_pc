if (sessionStorage.getItem('splash') == null) {
    console.log('First loaded');
    sessionStorage.setItem('splash', 'animation played')
} else {
    console.log('Already loaded')
}