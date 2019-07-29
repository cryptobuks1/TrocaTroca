const messages = {
    required: ':name é requerido.',
    minLength: ':name precisa ter no mínino :min caracteres.',
    maxLength: ':name precisa ter no máximo :max caracteres.',
    email: ':name não é um email válido.'
};

export class ValidationMessage {
    static getMessage(error: string, replaceTokens: Array<any>) {
        let message = messages[error];
        const tokens = message.match(/\:[a-z]+/g);
        tokens.forEach((token, index) => message = message.replace(token, replaceTokens[index]));

        return message;
    }
}