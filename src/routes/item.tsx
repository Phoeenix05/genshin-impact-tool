import { createResource, createSignal } from "solid-js"

const fetchItemData = async () => {
    return await fetch("/api/item", { 
        method: "GET" 
    }).then(res => res.text())
}

const ItemPage = () => {
    const [ itemName, setItemName ] = createSignal("hallo")
    const [ itemData, {} ] = createResource(itemName, fetchItemData)
    
    return (
        <pre>
            { itemData() }
        </pre>
    )
}

export default ItemPage