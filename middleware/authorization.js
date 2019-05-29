import cookie from 'js-cookie';
export default function (context) {
    // { store, redirect }
    const { redirect } = context
    // If the user is not authenticated
    if (!cookie.get('token') && (context['req'] && context['req'].headers.cookie.indexOf('token') === -1)) {
        return redirect('/login')
    }
}