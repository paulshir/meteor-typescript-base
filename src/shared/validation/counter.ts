export function ValidateNewCounter(name: string): string {
	if (_.isNull(name) || _.isUndefined(name)) {
		return "[name] must be provided."
	}
	
	if (!_.isString(name)) {
		return "[name] must be a string."
	}
	
	return null;
}