export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <p>Comping from layout.tsx::: Satyam</p>
        </div>
    );
}