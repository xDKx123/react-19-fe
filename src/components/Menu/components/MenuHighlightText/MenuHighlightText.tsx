import {FC, useMemo} from 'react';

interface MenuHighlightTextProps {
    text: string,
    search: string
}

const MenuHighlightText: FC<MenuHighlightTextProps> = (props: MenuHighlightTextProps) => {
    const parts = useMemo(() => props.text.split(new RegExp(`(${props.search})`, 'gi')), [props.text, props.search]);

    if (!props.search) return <>{props.text}</>;

    const getClassName = (part: string) => {
        return part.toLowerCase() === props.search.toLowerCase() ? 'bg-yellow-300' : '';
    }

    return (
        <>
            {parts.map((part: string, index: number) =>
                <span key={index} className={getClassName(part)}>{part}</span>
            )}
        </>
    )
}

export default MenuHighlightText;
