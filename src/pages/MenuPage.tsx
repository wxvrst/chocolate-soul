import {type RootState } from '../store/store';
import { useSelector } from 'react-redux';
const MenuPage = () => {
    const menuItems = useSelector((state: RootState) => state.menu);
    return (
        <>
            <section
                className='flex justify-center items-center'
            >
                <h1
                    className='tracking-[.10em] text-4xl font-serif my-32'
                >
                    Шоколад и десерты
                </h1>
            </section>
            <section
                className='bg-white text-black pt-24 px-62'
            >
                <h1
                    className='text-4xl text-left font-normal font-serif mx-4'
                >
                    МЕНЮ
                </h1>
                <div
                    className='border-b mt-8 border-neutral-200'
                />
                <ul>
                    {menuItems.map(item => (
                        <>
                            <li
                                className='mx-4 mt-4 flex justify-between'
                                key={item.id}
                                style={{ marginBottom: '20px' }}
                            >
                                <div>
                                    <h3
                                        className='text-lg text-neutral-700'
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className='text-neutral-600'
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                <div>
                                    <p
                                        className='text-neutral-600'
                                    >
                                        {item.price} ₽
                                    </p>
                                    <img
                                        className='ml-12'
                                        src={item.imgPath}
                                        alt={item.title}
                                        width={150}
                                    />
                                </div>

                            </li>
                            <div className='border-b mt-8 border-neutral-200' />
                        </>
                    ))}
                </ul>
            </section>
        </>
    )
}
export default MenuPage;