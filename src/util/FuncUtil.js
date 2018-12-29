
export function isSuccess(response) {
    return response && response.status &&
        response.status === 'success'
}