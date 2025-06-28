import { ColumnDirective, ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban';

import { Header } from '../components';
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-md">
    <Header category="App" title="Nishi's Task Board" />

    <KanbanComponent
      id="nishi-kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{
        contentField: 'Summary',
        headerField: 'Id',
        template: (props) => (
          <div>
            <p className="text-sm font-semibold">{props.Summary}</p>
            <p className="text-xs text-gray-500">Assigned to: {props.Assignee || 'Unassigned'}</p>
          </div>
        )
      }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
