import { formatCurrency } from "../helpers"
import { OrderAction } from "../reducers/order-reducer"
import { OrderItem } from "../types"

type OrderContentProp = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderAction>
}

export default function OrderContent({order, dispatch}: OrderContentProp) {
  return (
    <>
    
    <div>
       <h2 className="font-black text-4xl">
            Consumo
        </h2>
    </div>

    <div className="space-y3 mt-10">
        {order.map(item => (
            <div 
            key={item.id}
            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
            >

                <div>
                    <p className="text-lg">
                        {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                </div>

                <button 
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                >

                    X
                </button>
            </div>
        )) }
        
    </div>
    </>

  )
}
