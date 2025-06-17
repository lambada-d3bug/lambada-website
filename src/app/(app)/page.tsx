import { redirect } from 'next/navigation';

export default function Page() {
    const locale = localStorage.getItem('locale');
    console.log(locale);
    redirect(`/${locale || 'fr'}`);
}
