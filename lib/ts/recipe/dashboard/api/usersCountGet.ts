/* Copyright (c) 2022, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

import { APIInterface, APIOptions } from "../types";
import SuperTokens from "../../../supertokens";

export type Response = {
    status: "OK";
    count: number;
};

export default async function usersCountGet(
    _: APIInterface,
    tenantId: string,
    __: APIOptions,
    ___: any
): Promise<Response> {
    const count = await SuperTokens.getInstanceOrThrowError().getUserCount(undefined, tenantId);

    return {
        status: "OK",
        count,
    };
}
