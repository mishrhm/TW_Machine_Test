import { Button } from "react-bootstrap";

export function LoadMoreButton() {
    return (
        <div className="text-center my-5">
            <Button
                className="rounded-0 border-0 px-4 py-2 text-sm text-white font-medium"
                style={{ backgroundColor: '#3f3f46' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#27272a')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3f3f46')}
            >
                Load more
            </Button>
        </div>
    )
}