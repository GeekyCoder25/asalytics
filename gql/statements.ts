import { gql } from "@apollo/client";

export const GET_ALL_ASA = gql`
	query GetASAa {
		asalist {
			results {
				logo
				assetId
				available
				name
			}
		}
	}
`;
