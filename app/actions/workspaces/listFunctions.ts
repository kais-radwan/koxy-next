"use server"

import supabaseServer from "@/app/actions/supabaseServer"
import isArray from "@/scripts/isArray"

export default async function listFunctions(workspaceId: string) {

	if (!workspaceId || typeof workspaceId !== "string") {
		return []
	}

	const supabase = supabaseServer()

	const { error, data } = await supabase
		.from("functions")
		.select("id, name, created_at, workspace_id")
		.eq("workspace_id", workspaceId)

	return error || data

}