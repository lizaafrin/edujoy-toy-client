import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../providers/AuthProvider';
import SingleKitCard from './SingleKitCard';


const ShopByCAtegory = () => {
    const { toyInfo } = useContext(AuthContext);
    const scienceKits = toyInfo.filter(singleKit => singleKit.category === "Science Kits");
    // console.log(scienceKits);
    const learningKits = toyInfo.filter(singleKit => singleKit.category === "Learning Kits");
    // console.log(learningKits);
    const engineeringKits = toyInfo.filter(singleKit => singleKit.category === "Engineering Kits");
    // console.log(engineeringKits);
    return (
        <div className='mt-20'>
            <Tabs className='mx-10 border-fuchsia-100'>
                <div className='w-fit mx-auto  bg-slate-800 rounded-lg mb-14'>
                    <h2 className='text-xl text-white px-10 py-3'>Find Your Desired Products</h2>
                </div>
                <div className='border-0 bg-slate-800 rounded-lg mb-5'>
                    <TabList className='flex flex-row justify-around text-white text-base md:text-xl py-3'>
                        <Tab>Science Kits</Tab>
                        <Tab>Learning Kits</Tab>
                        <Tab>Engineering Kits</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            scienceKits.slice(0, 3).map(singleKit => <SingleKitCard key={singleKit._id} singleKit={singleKit}></SingleKitCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            learningKits.slice(0, 3).map(singleKit => <SingleKitCard key={singleKit._id} singleKit={singleKit}></SingleKitCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            engineeringKits.slice(0, 3).map(singleKit => <SingleKitCard key={singleKit._id} singleKit={singleKit}></SingleKitCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCAtegory;