import PrimaryButton from '../common/PrimaryButton';

const ContactForm = () => {
    return (
        <form action='#' method='POST' className='px-6 lg:px-8'>
            <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                    <div>
                        <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-900'>
                            Voornaam
                        </label>
                        <div className='mt-2.5'>
                            <input
                                type='text'
                                name='first-name'
                                id='first-name'
                                autoComplete='given-name'
                                className='block w-full bg-gray-100 rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 border-primary focus:border-[3px] sm:text-sm'
                                style={{ outline: 'none' }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='last-name' className='block text-sm font-semibold leading-6 text-gray-900'>
                            Achternaam
                        </label>
                        <div className='mt-2.5'>
                            <input
                                type='text'
                                name='last-name'
                                id='last-name'
                                autoComplete='family-name'
                                className='block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 border-primary focus:border-[3px] sm:text-sm'
                                style={{ outline: 'none' }}
                            />
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor='email' className='block text-sm font-semibold leading-6 text-gray-900'>
                            Email
                        </label>
                        <div className='mt-2.5'>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                autoComplete='email'
                                className='block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 border-primary focus:border-[3px] sm:text-sm'
                                style={{ outline: 'none' }}
                            />
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor='phone-number' className='block text-sm font-semibold leading-6 text-gray-900'>
                            Telefoonnummer
                        </label>
                        <div className='mt-2.5'>
                            <input
                                type='tel'
                                name='phone-number'
                                id='phone-number'
                                autoComplete='tel'
                                className='block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 border-primary focus:border-[3px] sm:text-sm'
                                style={{ outline: 'none' }}
                            />
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor='message' className='block text-sm font-semibold leading-6 text-gray-900'>
                            Bericht
                        </label>
                        <div className='mt-2.5'>
                            <textarea
                                name='message'
                                id='message'
                                rows={4}
                                className='block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm border-2 border-primary focus:border-[3px] sm:text-sm'
                                style={{ outline: 'none' }}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex justify-start'>
                    <PrimaryButton inline={true} extraClass='py-3.5 px-6'>
                        Verstuur
                    </PrimaryButton>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
