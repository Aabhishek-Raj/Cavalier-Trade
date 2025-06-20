export const userControllerFactory = ({
  createUserUsecase,
  findUserUsecase,
}: {
  createUserUsecase: any;
  findUserUsecase: any;
}) => {
  return {
    createUserController: async ({ body }: any) => {
      const result = await createUserUsecase({ body });
      return {
        statusCode: 201,
        body: result,
      };
    },

    findUserController: async ({ params }: any) => {
      const result = await findUserUsecase({ id: params.id });
      return {
        statusCode: 200,
        body: result,
      };
    },
  };
};
