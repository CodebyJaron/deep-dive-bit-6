const Companies = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-primary font-bold text-3xl'>Onze werkmaatschappijen</h1>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1  gap-8 mt-4'>
                <div className='overflow-hidden rounded-lg bg-gray-200 shadow'>
                    <div className='px-4 py-24'></div>
                </div>
                <div className='overflow-hidden rounded-lg bg-gray-200 shadow'>
                    <div className='px-4 py-24'></div>
                </div>
                <div className='overflow-hidden rounded-lg bg-gray-200 shadow'>
                    <div className='px-4 py-24'></div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
