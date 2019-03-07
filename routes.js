import React from 'react';

import ManagerCategory from '../views/Manager/ManagerCategory';
import ManagerFile from '../views/Manager/ManagerFile';
import ManagerJob from '../views/Manager/ManagerJob';
import ManagerNews from '../views/Manager/ManagerNews';
import ManagerUser from '../views/Manager/ManagerUser';

const routes =[
    {
        path:"/manager",
        exact:true
    },
    {
        path:"/manager/category",
        exact:false,
        main:() => <ManagerCategory/>
    },
    {
        path:"/manager/file",
        exact:false,
        main:()=><ManagerFile/>
    },
    {
        path:"/manager/job",
        exact:false,
        main:()=><ManagerJob/>
    },
    {
        path:"/manager/news",
        exact:false,
        main:()=><ManagerNews/>
    },
    {
        path:"/manager/user",
        exact:false,
        main:()=><ManagerUser/>
    }


]
export default routes