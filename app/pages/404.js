import { MainLayout } from "../components/MainLayout";

function ErrorPage() {
    return (
        <MainLayout title="404">
            <h1>Упс! Страница отстутствует...</h1>
        </MainLayout>
    );
}

export default ErrorPage;
