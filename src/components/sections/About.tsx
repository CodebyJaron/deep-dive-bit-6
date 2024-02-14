import PrimaryButton from '../common/PrimaryButton';

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-8 mt-16'>
                <div>
                    <h1 className='text-primary font-bold text-3xl'>Avontuurlijk theater op elke plek</h1>
                    <p className='text-gray-400 text-xs mt-4'>
                        Weet je het nog? Vroeger…. Als sinterklaas kwam, hoe je daar volledig in geloofde en in
                        meegezogen werd? Dat is de magie van theater. Theater betovert!
                    </p>

                    <p className='text-gray-400 mt-4 text-xs'>
                        Bij Code 0 Producties worden keer op keer vele kinderharten geraakt. Niet alleen met
                        Sinterklaas, maar ook met de Bosvrienden, Kapitein Kromspijker en Sophie, en al onze andere
                        karakters. De verhalen van Code 0 zijn zo interactief, dat je er onderdeel van wordt.
                    </p>

                    <p className='text-gray-400 mt-4 text-xs'>
                        Voor een theatervoorstelling ga je naar het theater. Een geweldige beleving! Maar wist je dat
                        theater ook heel goed past op heel veel andere plaatsen? Bijvoorbeeld op een vakantiepark, in
                        een bos, in een winkelcentrum. En wat als kinderen zelf mee mogen op avontuur? Met de personages
                        mee op zoek naar de onderdelen van een neergestorte tijdmachine of een verdwaalde koning? Hoe
                        spannend is dat! Code 0 Producties het mogelijk voor uw bezoekers.
                    </p>

                    <div className='mt-4 flex gap-8'>
                        <div>
                            <PrimaryButton extraClass='py-2 px-4'>Ons verhaal</PrimaryButton>
                        </div>

                        <div>
                            <PrimaryButton extraClass='py-2 px-4' inline={true}>
                                Onze karakters
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className='overflow-hidden rounded-lg bg-gray-200 shadow'>
                    <div className='px-4 py-5 sm:p-6'></div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-8 mt-16'>
                <div className='overflow-hidden rounded-lg bg-gray-200 shadow'>
                    <div className='px-4 py-5 sm:p-6'></div>
                </div>

                <div>
                    <h1 className='text-primary font-bold text-3xl'>Avontuurlijk theater op elke plek</h1>
                    <p className='text-gray-400 text-xs mt-4'>
                        Weet je het nog? Vroeger…. Als sinterklaas kwam, hoe je daar volledig in geloofde en in
                        meegezogen werd? Dat is de magie van theater. Theater betovert!
                    </p>

                    <p className='text-gray-400 mt-4 text-xs'>
                        Bij Code 0 Producties worden keer op keer vele kinderharten geraakt. Niet alleen met
                        Sinterklaas, maar ook met de Bosvrienden, Kapitein Kromspijker en Sophie, en al onze andere
                        karakters. De verhalen van Code 0 zijn zo interactief, dat je er onderdeel van wordt.
                    </p>

                    <p className='text-gray-400 mt-4 text-xs'>
                        Voor een theatervoorstelling ga je naar het theater. Een geweldige beleving! Maar wist je dat
                        theater ook heel goed past op heel veel andere plaatsen? Bijvoorbeeld op een vakantiepark, in
                        een bos, in een winkelcentrum. En wat als kinderen zelf mee mogen op avontuur? Met de personages
                        mee op zoek naar de onderdelen van een neergestorte tijdmachine of een verdwaalde koning? Hoe
                        spannend is dat! Code 0 Producties het mogelijk voor uw bezoekers.
                    </p>

                    <div className='mt-4 flex justify-end gap-8'>
                        <div>
                            <PrimaryButton extraClass='py-2 px-4'>Ons verhaal</PrimaryButton>
                        </div>

                        <div>
                            <PrimaryButton extraClass='py-2 px-4' inline={true}>
                                Onze karakters
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
