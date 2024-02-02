export interface Quiz {
    question: string;
    hints?: (string)[] | null;
    answer?: (string)[] | null;
    navigateTo: string;
}
