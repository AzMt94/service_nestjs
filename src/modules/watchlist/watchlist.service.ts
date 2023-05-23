import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Watchlist } from './models/watchlist.model';
import { CreateAssetResponse } from './response';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectModel(Watchlist) private readonly watchlistRepo: typeof Watchlist,
  ) {}

  async createAsset(user, dto): Promise<CreateAssetResponse> {
    try {
      const watchlist = {
        user: user.id,
        name: dto.name,
        assetId: dto.assetId,
      };
      await this.watchlistRepo.create(watchlist);
      return watchlist;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteAsset(userId: number, assetId: string): Promise<boolean> {
    try {
      await this.watchlistRepo.destroy({
        where: { id: assetId, user: userId },
      });
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}
