interface StockItemProps {
    name: string;
    setHighlight: (name: string) => void;
    isHighlighted: boolean;
}

const StockItem = (props: StockItemProps) => {
    return (
        <p>Item</p>
    );
}

export default StockItem;