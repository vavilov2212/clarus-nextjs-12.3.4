import React, { useEffect, useState, useMemo, useCallback } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { IAccount } from "interfaces";
import { Table } from "components";
import { TimeStamp } from "components/Table/CellDataTypes";
import { DefaultHeaderCell } from "components/Table/CellDataTypes";

const AccountsTable = () => {
  const [refresher, setRefresher] = useState(0);

  useEffect(() => {
    console.log("refresher", refresher);
  }, [refresher]);

  const columns = useMemo(() => {
    const columnHelper = createColumnHelper<IAccount>();

    return [
      columnHelper.accessor("timestamp", {
        header: () => <DefaultHeaderCell>Create date</DefaultHeaderCell>,
        cell: TimeStamp,
      }),
      columnHelper.accessor("clientId", {
        header: () => <DefaultHeaderCell>Client ID</DefaultHeaderCell>,
      }),
      columnHelper.accessor("country", {
        header: () => <DefaultHeaderCell>Country</DefaultHeaderCell>,
      }),
      columnHelper.accessor("email", {
        header: () => <DefaultHeaderCell>Email</DefaultHeaderCell>,
      }),
      columnHelper.accessor("phone", {
        header: () => <DefaultHeaderCell>Phone</DefaultHeaderCell>,
      }),
    ];
  }, []);

  const _data = useMemo(
    () =>
      data.filter((entry) => {
        return /^CLIENT-C-[\d+-]+$/.test(entry.clientId);
      }),
    [data]
  );

  return (
    <div>
      <button onClick={() => setRefresher(refresher + 1)}>Refresher</button>
      <Table data={_data} columns={columns} />
    </div>
  );
};

export default React.memo(AccountsTable);

const data: IAccount[] = [
  {
    timestamp: 1234,
    clientId: "CLIENT-123-123-123-123",
    country: "Russia",
    email: "michal@yandex.ru",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-321-321-321-321",
    country: "USA",
    email: "john-smith@gmail.com",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-C-654-654-654-654",
    country: "Germany",
    email: "shuemacher@gmail.com",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-C-987-987-987-987",
    country: "Poland",
    email: "krakov@gmail.com",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-000-000-000-000",
    country: "USA",
    email: "jane-smith@gmail.com",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-444-444-444-444",
    country: "Canada",
    email: "montreal123@gmail.cn",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-A-333-333-333-333",
    country: "Russia",
    email: "ivan@mail.ru",
    phone: "+79161231234",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-A-222-222-222-222",
    country: "Australia",
    email: "volvorine@gmail.au",
    phone: "+19009998877",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-C-111-111-111-111",
    country: "Russia",
    email: "bear@rambler.ru",
    phone: "+79265554433",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-C-999-999-999-999",
    country: "Mexico",
    email: "hesus@gmail.com",
    phone: "+529881112233",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-C-888-888-888-888",
    country: "Canada",
    email: "quwebeck@gmail.cn",
    phone: "+19013335566",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-777-777-777-777",
    country: "USA",
    email: "jack-smith@gmail.com",
    phone: "+19881234567",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-A-666-666-666-666",
    country: "Great Britain",
    email: "queen-2023@yahoo.com",
    phone: "+99817654433",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-T-555-555-555-555",
    country: "Poland",
    email: "poland@gmail.com",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-T-444-444-444-444",
    country: "Spain",
    email: "nuria1993@gmail.com",
    phone: "+79889990022",
  },
  {
    timestamp: 56789,
    clientId: "CLIENT-C-333-333-333-333",
    country: "Spain",
    email: "fiasco2003@gmail.com",
    phone: "+79889990022",
  },
];
