import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

import { LineChart, SparkLine } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { earningData, recentComments, SparklineAreaData, topProducts } from '../data/dummy';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border: 'none', color: currentMode === 'Dark' ? 'white' : 'black' }}
      value="1"
      dataSource={[
        { Time: 'Last 7 days', Id: '1' },
        { Time: 'Last 30 days', Id: '2' },
        { Time: 'Last year', Id: '3' },
      ]}
      popupHeight="200px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24 px-4">
      {/* KPI Section */}
      <div className="flex flex-wrap gap-4 justify-center">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 shadow-md rounded-xl p-6 w-72"
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl" style={{ color: item.iconColor }}>
                {item.icon}
              </div>
              <div className={`text-lg font-bold text-${item.pcColor}`}>
                {item.percentage}
                {item.percentage.includes('-') ? <BsArrowDownShort /> : <BsArrowUpShort />}
              </div>
            </div>
            <p className="mt-4 text-xl font-semibold">{item.amount}</p>
            <p className="text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Revenue + Active Users */}
      <div className="flex flex-wrap mt-10 gap-6 justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-xl w-full lg:w-[60%]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Customer Growth</h2>
            <DropDown currentMode={currentMode} />
          </div>
          <LineChart />
        </div>

        <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-xl w-full lg:w-[35%]">
          <h2 className="text-xl font-semibold mb-4">Active Users</h2>
          <p className="text-3xl font-bold text-green-500">12,348</p>
          <p className="text-sm text-gray-400 mb-4">+14.5% since last week</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-400 h-2 rounded-full"
              style={{ width: '72%' }}
            ></div>
          </div>
          <div className="mt-6">
            <SparkLine
              currentColor={currentColor}
              id="user-spark"
              height="100px"
              width="100%"
              type="Line"
              data={SparklineAreaData}
              color={currentColor}
            />
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white dark:bg-secondary-dark-bg p-6 mt-10 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Top Products</h2>
          <DropDown currentMode={currentMode} />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b dark:border-gray-600">
                <th className="py-2">Product</th>
                <th className="py-2">Sales</th>
                <th className="py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((item) => (
                <tr key={item.name} className="border-b dark:border-gray-700">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.sales}</td>
                  <td className="py-2">{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white dark:bg-secondary-dark-bg p-6 mt-10 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Recent Comments</h2>
        {recentComments.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 py-3 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-400">{item.comment}</p>
            </div>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
