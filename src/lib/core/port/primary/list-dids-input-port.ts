import { BaseAuthenticatedInputPort } from "@/lib/common/base-components/primary-ports";
import { ListDIDsRequest } from "@/lib/core/data/usecase-models/list-dids-usecase-models";

/**
 * @interface ListDIDsInputPort to fetch a list of DIDs from the backend.
 */
export default interface ListDIDsInputPort extends BaseAuthenticatedInputPort<ListDIDsRequest> {}