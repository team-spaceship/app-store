import DeleteLog from '../schemas/DeleteLog';

const deleteLogService = class DeleteLogService {
  /**
  * Returns all deletionLogs
  *
  * @returns [{deleteLogs}]
  */
  async getDeleteLogs(res) {
    const deleteLogs = await DeleteLog.find().sort('-date').exec();
    
    if (!deleteLogs) {
      return res.status(400).end();
    }
    
    return deleteLogs;
  }
};

export default new deleteLogService();
