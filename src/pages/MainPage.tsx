import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'

const MainPage = () => {

    return (
        <>
            <section
                className='flex flex-col justify-center items-center pt-46'
            >
                <h2
                    className='tracking-[.25em] text-base text-center'
                >
                    -  ШОКОЛАДНЫЙ БУТИК  -
                </h2>
                <h1
                    className='md:text-8xl text-5xl font-serif font-thin tracking-normal text-center'
                >
                    Шоколадная<br /> душа
                </h1>
                <Link
                    to='chocolatesoul/orders'
                    className='cursor-pointer text-neutral-400 text-lg font-normal underline underline-offset-8 mt-52 hover:text-neutral-200'
                >
                    ЗАКАЗАТЬ ОНЛАЙН
                </Link>
            </section>

            <section
                className='bg-neutral-50 mt-24 mx-auto flex py-24 px-8 justify-center gap-12 flex-wrap'
            >
                <img
                    className='w-[460px] aspect-2/3'
                    src='./images/chif.avif'
                    alt='photo'
                />
                <div
                    className='text-[#756f63] font-thin flex flex-col gap-2 justify-cente items-center mt-12'
                >
                    <h1
                        className='font-serif text-4xl text-center'
                    >
                        Моя история
                    </h1>
                    <h2
                        className='border-b pb-2 text-center'
                    >
                        МЕНЯ ЗОВУТ ЛУЧШИЙ ПОВАР
                    </h2>

                    <p
                        className='md:max-w-[30vw] max-w-[80vw] text-sm/loose text-center mt-6'
                    >
                        Это текст.
                        Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды,
                        чтобы добавить свой текст и настроить шрифт.
                        Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе.
                        Здесь будет удачно смотреться текст о вашей компании и услугах.
                        Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам.
                        Расскажите интересную историю, например, как вам в голову пришла идея собственного дела.
                        <br /><br />
                        Приводите увлекательные факты, цифры и не забудьте про ключевые слова,
                        по которым ваш сайт найдут в поисковых системах. Чтобы добавить свое фото,
                        нажмите на изображение и выберите «Заменить фото».
                    </p>
                </div>
            </section>

            <div
                className='bg-cover bg-[url(./images/bg-image-second.jpg)] bg-center h-140 bg-no-repeat	'
            />

            <section
                className='bg-neutral-50 mx-auto flex py-24 px-8 justify-center gap-12 flex-wrap'
            >
                <div
                    className='text-[#756f63] font-thin flex flex-col gap-2 justify-center items-center mt-12'
                >
                    <h1
                        className='font-serif text-4xl text-center'
                    >
                        Кейтеринг и события
                    </h1>
                    <h2
                        className='border-b pb-2 text-center'
                    >
                        САМЫЕ СЛАДКИЕ МОМЕНТЫ ЖИЗНИ
                    </h2>

                    <p
                        className='md:max-w-[30vw] max-w-[80vw] text-sm/loose text-center mt-6'
                    >
                        Здесь будет удачно смотреться текст о вашей компании и услугах.
                        Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам.
                        Расскажите интересную историю, например, как вам в голову пришла идея собственного дела,
                        и объясните, в чем заключается ваше преимущество перед конкурентами.
                    </p>
                    <a
                        className='cursor-pointer text-neutral-400 text-base font-thin hover:text-neutral-800 mt-12'
                    >
                        СМОТРЕТЬ МЕНЮ&#8594;
                    </a>
                </div>

                <div
                    className="grid sm:grid-cols-2 gap-4 grid-cols-1"
                >
                    <img
                        className='w-[220px] h-[232px] object-cover hover:opacity-80'
                        src='./images/img1.jpg'
                        alt='photo'
                    />
                    <img
                        className='w-[220px] h-[232px] object-cover hover:opacity-80'
                        src='./images/img2.jpg'
                        alt='photo'
                    />
                    <img
                        className='w-[220px] h-[232px] object-cover hover:opacity-80'
                        src='./images/img3.jpg'
                        alt='photo'
                    />
                    <img
                        className='w-[220px] h-[232px] object-cover hover:opacity-80'
                        src='./images/img4.jpg'
                        alt='photo'
                    />
                </div>
            </section>
 
 
            <section
                className='bg-cover bg-[url(./images/bg-image-3.avif)] bg-center bg-no-repeat flex flex-col flex-wrap gap-2 font-light justify-center items-center h-140'
            >
                <h1
                    className='text-4xl italic font-serif md:max-w-[30vw] max-w-[80vw] text-center tracking-wide'
                >
                    «Кто может быть лучше друга? Только друг с шоколадом»
                </h1>
                <h2
                    className="tracking-[.20em] text-base text-center"
                >
                    - Линда Грейсон -
                </h2>
            </section>
            <section
                className='bg-neutral-50 mx-auto flex py-24 px-8 justify-center gap-12 flex-wrap'
            >
                <div
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <img
                        className='w-[220px] aspect-3/7 object-cover'
                        src='./images/cacao1.avif'
                    />
                    <img
                        className='w-[220px] aspect-3/7 object-cover'
                        src='./images/cacao2.jpeg'
                    />
                </div>
                <div
                    className='text-[#756f63] font-thin flex flex-col gap-2 justify-cente items-center mt-24'
                >
                    <h1
                        className='font-serif text-4xl'
                    >
                        Какао
                    </h1>
                    <h2
                        className='border-b pb-2 text-center'
                    >
                        КАКАО-БОБЫ ЛУЧШЕГО КАЧЕСТВА СО ВСЕГО МИРА
                    </h2>

                    <p
                        className='md:max-w-[30vw] max-w-[80vw] text-sm/loose text-center mt-6'
                    >
                        Здесь будет удачно смотреться текст о вашей компании и услугах.
                        Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам.
                        Расскажите интересную историю, например, как вам в голову пришла идея собственного дела,
                        и объясните, в чем заключается ваше преимущество перед конкурентами..
                    </p>
                </div>
            </section>

            <section
                id='contacts'
                className='bg-[#F4F3F2] text-[#756f63] font-thin flex flex-col gap-2 justify-cente items-center pt-20 pb-8 flex-wrap'
            >
                <h1
                    className='font-serif text-4xl text-center'
                >
                    Свяжитесь со мной
                </h1>
                <h2
                    className='text-sm sm:text-base border-b pb-2 tracking-[.20em] text-center'
                >
                    INFO@MYSITE.RU / ТЕЛЕФОН: +7 (495) 000-00-00
                </h2>
                <p
                    className='md:max-w-[28vw] max-w-[80vw] text-sm/loose text-center mt-12'
                >
                    Напишите мне, я с удовольствием отвечу на любые ваши вопросы.
                    Просто заполните форму:
                </p>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    className="flex gap-2 flex-wrap justify-center"
                >
                    <div
                        className="flex flex-col gap-2"
                    >
                        <TextField label="Имя" size='small' variant="outlined" />
                        <TextField label="e-mail" size='small' variant="outlined" />
                        <TextField label="Телефон" size='small' variant="outlined" />
                    </div>
                    <TextField
                        label="Добавьте сообщение"
                        multiline
                        size='small'
                        rows={5}
                    />
                </Box>
                <button
                    className="font-normal text-black border-neutral-400 border-1 py-2 px-3 rounded-md cursor-pointer hover:border-black"
                >
                    Отправить
                </button>
            </section>
        </>
    );
};

export default MainPage;
