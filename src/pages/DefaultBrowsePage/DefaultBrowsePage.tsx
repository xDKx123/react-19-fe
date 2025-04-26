import {FC, useMemo} from 'react';
import {useParams, useSearchParams} from "react-router";
import BrowseView from "../../components/BrowseView/BrowseView.tsx";
import useBrowseViewData from "./hooks/useBrowseViewData.ts";
import {GridPaginationModel} from "@mui/x-data-grid";

type Params = {
    module: string;
    model: string;
}

const DefaultBrowsePage: FC = () => {
    const {module, model} = useParams<Params>();

    const [searchParams, setSearchParams] = useSearchParams();

    const paginationModel = useMemo<GridPaginationModel>(() => ({
        page: parseInt(searchParams.get('page') || '0', 10),
        pageSize: parseInt(searchParams.get('items') || '25', 10),
    }), [searchParams]);

    const handleOnPaginationChange = (paginationModel: GridPaginationModel) => {
        setSearchParams({
            page: paginationModel.page.toString(),
            items: paginationModel.pageSize.toString(),
        });
    }

    const {columns, data, loading} = useBrowseViewData({model, module, page: paginationModel.page, items: paginationModel.pageSize});

    return (
        <BrowseView title={model ?? ''} columns={columns} data={data} hideAllRecords={true} loading={loading}
        pagination={{gridPaginationModel: paginationModel, handleOnPaginationChange: handleOnPaginationChange}}
        />
    );
}

export default DefaultBrowsePage;
