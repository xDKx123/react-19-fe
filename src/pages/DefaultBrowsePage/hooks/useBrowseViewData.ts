import {useEffect, useState} from "react";
import ApiService from "../../../api/service.ts";
import {GridPaginationModel} from "@mui/x-data-grid";

interface BrowseColumns {
    name: string;
    type: string;
}

interface BrowseViewDataProps {
    model?: string;
    module?: string;

    page?: number;
    items?: number;
}

const useBrowseViewData = (props: BrowseViewDataProps) => {
    const [columns, setColumns] = useState<BrowseColumns[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const apiService = new ApiService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!props.model || !props.module) {
                    throw new Error('Model and module are required');
                }

                setLoading(true);
                // const columns = await fetchColumns();
                // const data = await fetchData();
                setColumns([{name: 'id', type: "string"}, {name: 'name', type: "string"}, {name: 'desc', type: "string"}]);

                //TODO: fetch only the rows that are needed
                //const apiData: any[] = await apiService.get(props.module + '/' + props.model)
                //console.log(apiData)
                const data = Array.from({ length: 1000 }, (_, index) => ({
                    id: `ID-${index + 1}`,
                    name: `Name ${index + 1}`,
                    desc: `Description for item ${index + 1}`,
                }));

                if (props.page && props.items) {
                    const paginatedData = data.slice(props.page, props.items);
                    console.log(props)
                    setData(paginatedData || []);
                }
                else {
                    console.log(props)
                    setData(data || []);
                }
            } catch (error: unknown) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    //const gridColumns = useMemo(() => columns, [columns]);

    return {columns, data, loading};
}

export default useBrowseViewData;
export type {BrowseColumns};