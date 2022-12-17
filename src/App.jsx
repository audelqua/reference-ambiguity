import React, { useState } from 'react'
import ChildComponent from '@/components/ChildComponent'
const tempTabs = ['tab_1', 'tab_2', 'tab_3']


const App = () => {
    const [currentTab, setCurrentTab] = useState('tab_1')
   
    const handleChangeTab = (myIndex) => {
        setCurrentTab(tempTabs[myIndex])
    }

    const renderBody = () => {
        if(currentTab === 'tab_1') {
            // console.log(11111111);
            return (
                <>
                    <ChildComponent text={'1-1'} targetObject={{name: 'tab1_1'}}/>
                    <ChildComponent text={'1-2'} targetObject={{name: 'tab1_2'}}/>
                </>
            )
        }else if(currentTab === 'tab_2') {
            // console.log(2222222);
            return (
                <>
                    <ChildComponent text={'2-1'} targetObject={{name: 3}}/>
                    <ChildComponent text={'2-2'} targetObject={{name: 4}}/>
                </>
            )
        }else if(currentTab === 'tab_3') {
            // console.log(333333333);
            return (
                <>
                    <ChildComponent text={'3-1'} targetObject={{name: 'tab3_1'}}/>
                    <ChildComponent text={'3-2'} targetObject={{name: 'tab3_2'}}/>
                </>
            )
        }


        // switch(currentTab) {
        //     case 'tab_1':
        //         console.log('now we are in tab 1')
        //         return (
        //             <>
        //                 <ChildComponent targetObject={{name: 'tab1_1'}}/>
        //                 <ChildComponent targetObject={{name: 'tab1_1'}}/>
        //             </>
        //         )
        //     case 'tab_2':
        //         console.log('now we are in tab 2')
        //         return (
        //             <>
        //                 <ChildComponent targetObject={{name: 'tab2_1'}}/>
        //                 <ChildComponent targetObject={{name: 'tab2_2'}}/>
        //             </>
        //         )
        //     case 'tab_3':
        //         console.log('now we are in tab 3')
        //         return (
        //             <>
        //                 <ChildComponent targetObject={{name: 'tab3_1'}} />
        //                 <ChildComponent targetObject={{name: 'tab3_2'}} />
        //             </>
        //         )
        //     default: 
        //         break;
        // }
    }
    return (
        <div>
            <button onClick={() => handleChangeTab(0)}>
                change to tab 1
            </button>
            <button onClick={() => handleChangeTab(1)}>
                change to tab 2
            </button>
            <button onClick={() => handleChangeTab(2)}>
                change to tab 3
            </button>
            {' '}
            current tab is: {currentTab}
            {renderBody()}
        </div>
    )
}

export default App

//*** this is first react component 